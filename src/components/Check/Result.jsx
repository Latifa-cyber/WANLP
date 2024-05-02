import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Result() {
  // States to manage plagiarism result
  const [plagiarismResult, setPlagiarismResult] = useState({ plagiarism_score: 0, original_score: 0 });
  const [text_sources, setTextSources] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Fetch plagiarism result
    axios.get("http://localhost:8000/report")
      .then((res) => {
        setPlagiarismResult(res.data); // Setting plagiarism result
        setTextSources(res.data.text_sources); // Setting text sources
        setUrls(res.data.urls); // Setting URLs
      })
      .catch((err) => {
        console.error(err); // Logging error
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center px-2">
        <div className="m-3 text-lg font-bold text-gray-500">التقرير</div>
        <div className="m-3">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "4rem" }}>
            {/* Original score */}
            <div className="RsultCard">
              <div style={{ color: "#111827" }}>المحتوى</div>
              <div style={{ marginTop: "0.5rem", fontSize: "2rem", color: "#3B82F6" }}>{plagiarismResult.original_score * 100}%</div>
              <div style={{ marginTop: "0.25rem", fontWeight: "500", color: "#6B7280" }}>أصلية</div>
            </div>
            {/* Plagiarism score */}
            <div className="RsultCard">
              <div style={{ color: "#111827" }}>النتيجة</div>
              <div style={{ marginTop: "0.5rem", fontSize: "2rem", color: "#3B82F6" }}>{plagiarismResult.plagiarism_score * 100}%</div>
              <div style={{ marginTop: "0.25rem", fontWeight: "500", color: "#6B7280" }}>مسروقة</div>
            </div>
          </div>
        </div>
      </div>
      {/* Text results */}
      <hr className="mt-4 h-0.5 bg-gray-300" />
      <div className="flex flex-col items-center px-8">
        <div className="m-3 font-semibold text-blue-500">عرض النصوص مع المصادر</div>
        <div class="bg-gray-200 rounded-md text-gray-600 p-2.5 justify-center mb-2">
          هذا نص تجريبي لعرض كيفية ظهور النص المسروق. يُستخدم هذا النص فقط كنموذج للعرض.
        </div>
        {/* Text sources list */}
        <div className="link-container">
          <ul>
            {text_sources.map((text, index) => (
              <li key={index} className="text-blue-500 underline">
                <a href={urls[index]} target="_blank" rel="noopener noreferrer">
                  •{text} 
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;