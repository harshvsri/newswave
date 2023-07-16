import { useState, useEffect } from "react";
import Card from "./Card";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsData {
  status: string;
  totalResults: number;
  articles: Article[];
}

function News() {
  const [data, setData] = useState<NewsData>({
    status: "",
    totalResults: 0,
    articles: [],
  });

  const API_KEY = "91f727ebc8b6488286c178cd38853d5d";
  const query = "Technology";
  const queryParam = query.length > 0 ? `q=${query}` : "";
  const BASE_URL = `https://newsapi.org/v2/everything?${queryParam}`;

  useEffect(() => {
    fetch(BASE_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data: NewsData) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [BASE_URL]);

  return (
    <>
      <div className="container article">
        {data.articles?.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            imgURL={article.urlToImage}
          />
        ))}
      </div>
    </>
  );
}

export default News;
