import axios from 'axios';
import React, { useState } from 'react';
import uploadIcon from "../../assets/uploadIcon.png";
import Close_icon from "../../assets/Close_icon.svg";
import TextIcon from "../../assets/TextIcon.png";


function Upload() {
  // States to manage file upload process
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const totalExpectedTimeInSeconds = 30;

  /**
   * Function to handle file upload.
   * @param {string} fileContent - Content of the file to be uploaded.
   */
  function handleUpload(fileContent) {
    setMsg("جاري التحميل..."); // Setting upload message
    setProgress((prevState) => ({ ...prevState, started: true })); // Setting upload progress

    // Creating cancel token
    const source = axios.CancelToken.source();
    setCancelToken(source);

    // Making POST request to upload file content
    axios.post(
      "http://localhost:8000/report",
      { uploaded_document: fileContent },
      {
        // Handling upload progress
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress((prevState) => ({ ...prevState, pc: percentCompleted }));
        },
        cancelToken: source.token, // Setting cancel token
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
      .then((res) => {
        setMsg("تم التحميل بنجاح!"); // Setting success message
        console.log(res.data); // Logging response data
        setUploadCompleted(true);
        setPlagiarismResult(res.data); // Setting plagiarism result
      })
      .catch((err) => {
        setMsg("فشل التحميل!"); // Setting error message
        console.error(err); // Logging error
      });
  }

  /**
   * Function to read .Text file content and handle upload.
   * @param {Event} e - File input change event.
   */
  const handleFileRead = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Reading file content
    const reader = new FileReader();
    reader.onload = function (event) {
      const content = event.target.result;
      setFileContent(content);
      handleUpload(content); // Handling file upload
    };
    reader.readAsText(selectedFile);
  };

  // Calculating remaining time for upload completion
  const remainingTime = Math.ceil((100 - progress.pc) / 100 * totalExpectedTimeInSeconds);

  /**
   * Function to cancel upload.
   */
  function handleCancel() {
    if (cancelToken) {
      cancelToken.cancel("Upload canceled!"); // Canceling upload
      setCancelToken(null);
      setProgress({ started: false, pc: 0 }); // Resetting progress
    }
  }

  /**
   * Function to handle file drop.
   * @param {Event} e - Drop event.
   */
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setShowProgress(true);
    handleUpload();
  };

  /**
   * Function to handle drag over.
   * @param {Event} e - Drag over event.
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly showing it's a copy
    e.currentTarget.classList.add('drag-over');
  };

  /**
   * Function to handle drag leave.
   * @param {Event} e - Drag leave event.
   */
  const handleDragLeave = (e) => {
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
                  <div className="name" style={{ fontWeight: 470 }}>{file.name}</div>
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
    </div>
  );
}

export default Upload;
