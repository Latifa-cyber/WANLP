import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Puff } from 'react-loader-spinner' //run npm install react-loader-spinner --save
import axios from 'axios';

function Result() {
  // States to manage plagiarism result
  const [plagiarismResult, setPlagiarismResult] = useState(null);
  const [text_sources, setTextSources] = useState([]);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fileContent = localStorage.getItem('fileContent');
    if (!fileContent) return;

    // Fetch plagiarism result
    axios.post("http://localhost:8000/report", { uploaded_document: fileContent })
      .then((res) => {
        setPlagiarismResult(res.data); // Setting plagiarism result
        setTextSources(res.data.text_sources); // Setting text sources
        setUrls(res.data.urls); // Setting URLs
        setLoading(false); // Data has been loaded
      })
      .catch((err) => {
        console.error(err); // Logging error
        setLoading(false); // Data has been loaded (even if failed)
      });
  }, []);

  if (loading) {
    return <div className="flex flex-col justify-center items-center h-full" style={{ height:"20rem" }}>
    <Puff width="80" color="#3B82F6" riaLabel="loading"/>
    <div style={{ color: "#6B7280" , fontWeight: "500", marginTop: "1.5rem", fontSize: "1.25rem"}}>يرجى انتظار التحميل..</div>
    </div>
  }

  if (!plagiarismResult) {
    return <div>Error loading result</div>;
  }

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
        <div className="bg-gray-200 rounded-md text-gray-600 p-2.5 justify-center mb-2">
          هذا نص تجريبي لعرض كيفية ظهور النص المسروق. يُستخدم هذا النص فقط كنموذج للعرض.
        </div>
        {/* Text sources list */}
        <div className="link-container">
          <ul>
            {text_sources.map((text, index) => (
              <li key={index} className="text-blue-500 underline">
                <a href={urls[index]} target="_blank" rel="noopener noreferrer">
                  • {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/check/upload">
          <div className="flex justify-end mt-4">
            <button className="px-10 py-3 border-gray-600 border-2 rounded-xl text-gray-600 font-semibold md:text-l" >
             إلغاء
            </button>
          </div>
      </Link>
    </div>
  );
}

export default Result;
