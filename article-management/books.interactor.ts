import { readChar } from "../core/input.utils";
import { IInteractor } from "../core/interactor";
import { IBookBase } from "../models/books.model";
import { BookRepository } from "./models/books.repository";
    const menu = `
    1. Add Book
    2. dit Book
    3.Search book
    4.<Pervious Menu>`;
export class BookInteractor extends IInteractor {
    private repo = new BookRepository();
    async showMenu(): Promise<void>{
        const op = await readChar(menu);
        switch (op.toLowerCase()) {
          case "1":
            // TODO add book flow
            break;
          case "2":
            // TODO add book flow
            break;
          case "3":
            // TODO add book flow
            break;
          case "4":
            // TODO add book flow
            break;
        }
    }
}


async function getBookInput():Promise<IBookBase> {
  const title=await
   const  author=await
   const  publisher=await
   const  genre=await
   const  isbnNo=await
   const  numofPages=await
   const  totalNumberOfCopies=await
} 

async function addBook(repo:BookRepository) {
  const book: IBookBase = await getBookInput();
  const createBook = repo.create(book);
}