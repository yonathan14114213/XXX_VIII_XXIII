import Title from "./title"

interface bookInterface {
    title:string;
    text:string;
    img: string;
}


export default function Book(mybook:bookInterface) {
  return (mybook.title, mybook.text, mybook.img)
}
