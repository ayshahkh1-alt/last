import {APIKey,APIToken} from "../support/constants.cy"
class dataUtils {

    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }
    createList = (boardId, listName) => {
    return cy.request("POST",
        `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${APIKey}&token=${APIToken}`
    )
}
    createCard = (listId,cardName) => {
    return cy.request("POST",
        `https://api.trello.com/1/cards?idList=${listId}&name=${cardName}&key=${APIKey}&token=${APIToken}`
    )
}

    deleteCard = (cardId) => {
        return cy.request("DELETE",`https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`
        )
    }

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }


}
export default dataUtils;