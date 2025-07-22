import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsApp = () => {
  const [country, setCountry] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    if (!country.trim()) return;

    setLoading(true);
    setError("");
    setArticles([]);

    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
      );
      setArticles(res.data.articles);
    } catch (err) {
      setError("Failed to fetch news. Try a valid country code.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchNews();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          🌍 Country News
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value.toLowerCase())}
            onKeyDown={handleKeyDown}
            placeholder="Enter country code (e.g. us, gb, in)"
            className="flex-1 border p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          <button
            onClick={fetchNews}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 dark:text-red-400">{error}</p>
        )}

        <div className="space-y-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border p-4 rounded hover:shadow transition duration-200 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {article.title}
              </h2>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="news"
                  className="w-full h-48 object-cover rounded my-2"
                />
              )}
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 inline-block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsApp;
