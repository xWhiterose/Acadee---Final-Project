// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MonProjetTShirt is ERC1155, Ownable {
    uint256 private currentTokenID; // Identifiant du prochain NFT à être généré.
    uint256 private priceOfMint = 0.03 ether; // Prix en ether pour pouvoir mint un NFT.
    string public name = "MonProjet - T Shirt"; // Nom de la collection affichée sur OpenSea

    mapping(uint256 => address) private owners; // Adresse du propriétaire d'un NFT pour un identifiant donné.
    mapping(address => uint256[]) private ownedTokens; // Tableau d'identifiant des NFT possédés par une adresse donnée.
    mapping(address => uint256) private burnBalance; // Nombre de NFT brûlés pour une adresse donnée.

    constructor(string memory uri) ERC1155(uri) {
        currentTokenID = 1;
    }
    
    // @dev Fonction qui génére un NFT pour l'utilisateur à condition qu'il ai le minimum requis.
    function mint() public payable {
        require(msg.value >= priceOfMint, "Erreur : Montant incorrect");

        _mint(msg.sender, currentTokenID, 1, "");

        owners[currentTokenID] = msg.sender;
        ownedTokens[msg.sender].push(currentTokenID);
        currentTokenID += 1;
    }

    // @dev Fonction pour obtenir le nombre de NFT détenu par l'utilisateur qui interagit avec cette fonction.
    // @return Le nombre de NFT possédés.
    function getBalance() public view returns (uint256) {
        return ownedTokens[msg.sender].length;
    }
    
    // @dev Fonction permettant à un utilisateur de bruler son NFT.
    function burn() public {
        require(ownedTokens[msg.sender].length > 0, "Erreur : Cet utilisateur n'a pas de NFT");

        uint256 tokenId = ownedTokens[msg.sender][ownedTokens[msg.sender].length - 1];
        _burn(msg.sender, tokenId, 1);
        delete owners[tokenId];
        ownedTokens[msg.sender].pop();
        burnBalance[msg.sender] += 1;
    }

    // @dev Fonction pour récupérer le nombre de NFT brulés par l'utilisateur qui interagit avec cette fonction.
    // @return Le nombre de NFT brulés.
    function getBurnBalance() public view returns (uint256) {
        return burnBalance[msg.sender];
    }

    // @dev Fonction pour envoyer l'argent sur le contrat à une adresse donnée.
    // @param to L'adresse à laquelle envoyer l'argent'.
    // @param amount La somme à retirer. 
    function withdraw(address payable to, uint256 amount) external onlyOwner {
        require(to != address(0), "Adresse Invalide");
        to.transfer(amount);
    }
}