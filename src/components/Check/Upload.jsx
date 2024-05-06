import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from "../../assets/uploadIcon.png";
import Close_icon from "../../assets/Close_icon.svg";
import TextIcon from "../../assets/TextIcon.png";
import { FaArrowLeft } from 'react-icons/fa'; //run npm install react-icons
import mammoth from "mammoth"; // run npm install mammoth



function Upload() {
  // States to manage file upload process
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const navigate = useNavigate();
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const totalExpectedTimeInSeconds = 30;


    const handleFileRead = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Reading file content
    const reader = new FileReader();
    reader.onloadstart = () => {
      setMsg("جاري التحميل...");
      setProgress({ started: true, pc: 0 });
    };
    reader.onprogress = (event) => {
      const percentCompleted = Math.round((event.loaded * 100) / event.total);
      setProgress({ started: true, pc: percentCompleted });
    };
    reader.onload = function (event) {
      const content = event.target.result;
  
      if (selectedFile.type === "text/plain") {
        setFileContent(content);
        setMsg("تم التحميل بنجاح!");
        setUploadCompleted(true);
      } else if (
        selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        mammoth.extractRawText({ arrayBuffer: content })
          .then((result) => {
            setFileContent(result.value);
            setMsg("تم التحميل بنجاح!");
            setUploadCompleted(true);
          })
          .catch((err) => {
            setMsg("فشل التحميل!");
            setProgress({ started: false, pc: 0 });
          });
      } else {
        setMsg("نوع الملف غير مدعوم!");
        setProgress({ started: false, pc: 0 });
      }
    };
  
    reader.onerror = () => {
      setMsg("فشل التحميل!");
      setProgress({ started: false, pc: 0 });
    };
  
    if (selectedFile.type === "text/plain") {
      reader.readAsText(selectedFile);
    } else if (
      selectedFile.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      reader.readAsArrayBuffer(selectedFile);
    } else {
      setMsg("نوع الملف غير مدعوم!");
      setProgress({ started: false, pc: 0 });
    }
  };

  // Calculating remaining time for upload completion
  const remainingTime = Math.ceil((100 - progress.pc) / 100 * totalExpectedTimeInSeconds);

  const handleSubmit = () => {
    if (fileContent) {
      localStorage.setItem('fileContent', fileContent);
      navigate('/check/result');
    }
  };

  /**
   * Function to cancel upload.
   */
  function handleCancel() {
    setMsg("تم إلغاء التحميل!");
    setProgress({ started: false, pc: 0 });
  }

  /**
 * Function to handle drag over.
 * @param {Event} e - Drag over event.
 */
const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'copy'; // Explicitly showing it's a copy
  e.currentTarget.classList.add('drag-over');
};

/**
 * Function to handle drag leave.
 * @param {Event} e - Drag leave event.
 */
const handleDragLeave = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove('drag-over');
};

/**
 * Function to handle file drop.
 * @param {Event} e - Drop event.
 */
const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const droppedFile = e.dataTransfer.files[0];
  setFile(droppedFile);
  handleFileRead(e);
  e.currentTarget.classList.remove('drag-over');
};

  return (
    <div>
      <p className="mt-7 text-l font-semibold text-gray-500">أضف ملفاتك هنا للتحقق من السرقة العلمية!</p>
      <div className='uploadform'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}>
        <img className="uploadIcon" src={uploadIcon} alt="Upload Icon" />
        <p className="mt-5 text-base font-semibold text-black">اسحب ملفك لبدأ التحميل</p>
        <div className="flex gap-3 items-center text-xs leading-8 text-center whitespace-nowrap text-neutral-500">
          <hr className="mt-4 h-px bg-gray-300" />
          <div className="gap-0 self-stretch">أو</div>
          <hr className="mt-4 h-px bg-gray-300" />
        </div>
        <label htmlFor="fileinputBtn">تصفح الملفات</label>
        <input onChange={(e) => { setFile(e.target.files[0]); handleFileRead(e); }} type="file" id="fileinputBtn" hidden accept=".txt,.pdf,.doc,.docx" />
      </div>
      <p className="mt-7 text-l font-semibold text-gray-500">يدعم فقط txt. وpdf. و doc.</p>
            
      {progress.started ? (
        uploadCompleted && progress.pc == 100 ? (
          <section className="Upload-completed mt-4">
            <li>
              <div className="col">
                <button onClick={handleCancel}><img src={Close_icon} alt="Close Icon" /></button>
              </div>

              <div className="col">
                <div className="file-name">
                  <div className="name" style={{ fontWeight: 470 }}>{file.name} </div>
                </div>
                <div className="file-size">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
              </div>

              <div className="col">
                <img src={TextIcon} alt="Pdf icon" />
              </div>

            </li>
          </section>
        ) : (
          <section className="list-section mt-4">
            <div className='list'>
              <li className='in-prog'>
                <div className='upper-row'>
                  <div>
                    <button onClick={handleCancel}><img src={Close_icon} alt="Close Icon" /></button>
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
      <section className="flex justify-end mt-5">
        <button onClick={handleSubmit} className="bg-blue-700 px-7 py-3 rounded-xl text-white font-semibold md:text-l ">
              متابعة
              <FaArrowLeft className="mr-3 inline" />
        </button>
      </section>
    </div>
  );
}

export default Upload;
