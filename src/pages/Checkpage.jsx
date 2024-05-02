import Check from "../components/Check/Check";
import Footer from "../components/Check/Footer";
import Card from "../components/Check/Card";
import Navbar from "../components/Navbar";

function Checkpage() {
  return (
    <div className="backg relative">
      <Navbar />
      <div className="mt-[30px] p-12 md:grid grid-cols-2 gap-2 mx-auto">
        <Check />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Checkpage;


{/*
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const totalExpectedTimeInSeconds = 30;
  const [plagiarismResult, setPlagiarismResult] = useState({ plagiarism_score: 0, original_score: 0 });
  const [text_sources, setTextSources] = useState([]);
  const [urls, setUrls] = useState([]);


  function handleUpload(fileContent) {
    setMsg("جاري التحميل...");
    setProgress((prevState) => ({ ...prevState, started: true }));
  
    const source = axios.CancelToken.source();
    setCancelToken(source);
  
    axios
      .post(
        "http://localhost:8000/report",
        { uploaded_document: fileContent },
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress((prevState) => ({ ...prevState, pc: percentCompleted }));
          },
          cancelToken: source.token,
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((res) => {
        setMsg("تم التحميل بنجاح!");
        console.log(res.data);
        setUploadCompleted(true);
        setPlagiarismResult(res.data);
      })
      .catch((err) => {
        setMsg("فشل التحميل!");
        console.error(err);
      });
  }
  

  const handleFileChange = () => {
    const selectedFile = document.getElementById('fileinput').files[0];
    setFile(selectedFile); // Set the file here
  
    const reader = new FileReader();
    reader.onload = function (event) {
      const content = event.target.result;
      setFileContent(content);
      handleUpload(content); // Call handleUpload after setting the file content
    };
    reader.readAsText(selectedFile);
  };
  
  

  const remainingTime = Math.ceil((100 - progress.pc) / 100 * totalExpectedTimeInSeconds);



  function handleCancel() {
    if (cancelToken) {
      cancelToken.cancel("Upload canceled!");
      console.log("Upload canceled!");
    }
  }

  // Function to handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    handleUpload();
  };

  // Function to handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show it's a copy
    e.currentTarget.classList.add('drag-over');
  };

  // Function to handle drag leave
  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  

  const [fileContent, setFileContent] = useState("");


  return (
    <>
      <header>
        <div className="hamburger-menu">
          <img src="src\assets\HumburgerMenu.png" alt="Hamburger Menu" />
        </div>
        <div className="brand"><img src="src\assets\PlagCheck.png" alt="PlagCheck Logo" /></div>
      </header>
      <div className="container">
        <div className="SideText">
          <img className="Forstudents" src="src\assets\Forstudents.png" alt="For Students" />
          <h1>مدقق السرقة العلمية</h1>
          <h4 style={{ color: '#6D6D6D' }}>اكتشف بسهولة المحتوى المنسوخ في النص العربي الخاص بك باستخدام أداة مدقق السرقة العلمية الفعالة.</h4>
          <img className="Arrow" src="src\assets\Arrow.png" alt="Arrow" />
        </div>
      
        <div className="wrapper">
          <h4 className="title">رفع الملفات</h4>
          <div className='form'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}>
            <img className="upload" src="src\assets\upload.png" alt="Upload Icon" />
            <p>اسحب ملفك لبدأ التحميل</p>
            <img className="divider" src="src\assets\Divider.png" alt="Divider" />
            <label htmlFor="fileinput">تصفح الملفات</label>
            <input onChange={(e) => { setFile(e.target.files[0]); handleFileChange(); }} type="file" id="fileinput" hidden />
          </div>

          {progress.started ? (
            uploadCompleted && progress.pc == 100 ? (
              <section className="Upload-completed">
                <li>
                  <div className="col">
                    <button onClick={handleCancel}><img src="src\assets\Close_icon.svg" alt="Close Icon" /></button>
                  </div>

                  <div className="col">
                    <div className="file-name">
                      <div className="name" style={{ fontWeight: 470 }}>{file.name}</div>
                    </div>
                    <div className="file-size">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                  </div>

                  <div className="col">
                    <img src="src\assets\PDF_icon.png" alt="Pdf icon" />
                  </div>

                </li>
              </section>
            ) : (
              <section className="list-section">
                <div className='list'>
                  <li className='in-prog'>
                    <div className='upper-row'>
                      <div>
                        <button onClick={handleCancel}><img src="src\assets\Close_icon.svg" alt="Close Icon" /></button>
                        <button><img src="src\assets\pause_circle.png" alt="Pause Icon" /></button>
                      </div>
                      <div className='file-name'>
                        {msg && <div className="list-title">{msg}</div>}
                        <p>{progress.pc}% • {remainingTime} ثانية متبقية</p>
                      </div>
                    </div>
                  </li>
                </div>
                {progress.started && (
                  <div className='prog-bar'>
                    <span style={{ width: `${progress.pc}%` }}></span>
                  </div>
                )}
              </section>
            )
          ) : null}
          {/*
          {uploadCompleted && plagiarismResult && (
            <h4 className="title">نتائج</h4>)}
          <div className="title-container">
            <div className="sub-title">التقرير</div>
            <div style={{ marginTop: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <div className="RsultCard">
                  <div style={{ color: "#111827" }}>المحتوى</div>
                  <div style={{ marginTop: "0.5rem", fontSize: "2rem", color: "#3B82F6" }}>{plagiarismResult.original_score * 100}%</div>
                  <div style={{ marginTop: "0.25rem", fontWeight: "500", color: "#6B7280" }}>أصلية</div>
                </div>
                <div className="RsultCard">
                  <div style={{ color: "#111827" }}>النتيجة</div>
                  <div style={{ marginTop: "0.5rem", fontSize: "2rem", color: "#3B82F6" }}>{plagiarismResult.plagiarism_score * 100}%</div>
                  <div style={{ marginTop: "0.25rem", fontWeight: "500", color: "#6B7280" }}>مسروقة</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="separator" />
          <div className="title-container">
            <div style={{ color: "#3B82F6", margin:"0.5rem" }}>عرض النصوص مع المصادر</div>
            <div class="textSource">
              يظهر هنا تحديد لعينة النص المسروق
            </div>
            <div className="link-container">
            <ul>
              {text_sources.map((text, index) => (
                <li key={index}>
                  <a href={urls[index]} target="_blank" rel="noopener noreferrer">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </div>
          
        </div>

      </div>

      <div className="footer"><p style={{ fontWeight: 470, color: 'white' }}>جميع حقوق النشر محفوظة 2024 © </p></div>
    </>
  );
}*/}


