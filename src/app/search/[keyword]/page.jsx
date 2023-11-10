import { getAnimeResponse } from "@/app/libs/apiLibs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"


const Page = async ({ params }) => {
  const { keyword } = params
  const decodedWord = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodedWord}`)

  return (
    <>
      <section>
        <Header title={ `Pencarian untuk '${decodedWord}'...` } />
        <AnimeList api={ searchAnime } />
      </section>
    </>
  )
}

export default Page
