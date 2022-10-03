import { Header } from "../Components/header";

export const Feed = ({ articles }) => {
  return (
    <div className="text-center ">
      <Header />
      {articles.map((article, index) => (
        <div key={index}>
          <h1
            onClick={() => (window.location.href = article.url)}
            className="text-2xl mx-auto max-w-[1000px] text-center font-bold"
          >
            {article.title}
          </h1>
          <p className="py-[20px] mx-auto max-w-[1000px] text-xl text-center">
            {article.description}
          </p>
          {!!article.urlToImage && (
            <img
              className="py-[20px] mx-auto max-w-[800px] rounded-[50px]"
              src={article.urlToImage}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  // if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
  //   return {
  //     props: { articles: [] },
  //   };
  // }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();
  const { articles } = apiJson;

  return {
    props: {
      articles,
      // pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
