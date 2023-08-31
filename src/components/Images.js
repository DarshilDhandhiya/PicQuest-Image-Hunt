import { ImageContext } from "../App";

const Images = () => {
    const { response, isLoading } = useContext(ImageContext);
  return (
    <>
        <h1 className="text-center mt-6 underline text-2xl">React For Cats</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
            <h1>Image 1</h1>
            <h1>Image 2</h1>
            <h1>Image 3</h1>
            <h1>Image 4</h1>
            <h1>Image 5</h1>
            <h1>Image 6</h1>
            <h1>Image 7</h1>
            <h1>Image 8</h1>
            <h1>Image 9</h1>
            <h1>Image 10</h1>
        </div>
    </>
  )
}

export default Images
