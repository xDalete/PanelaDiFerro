import { useRef } from "react"
import { Button } from "reactstrap"
const axios = require('axios').default;

export const UiFileInputButton = (props) => {
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <Button type="button" onClick={onClickHandler}>
        {props.label}
      </Button>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
      />
    </form>
  );
};

UiFileInputButton.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: false,
};

export const IndexPage = (props) => {
  
  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    const response = await axios.post('/api/uploads', formData, config);

    console.log('response', response.data);
  };

  return (
    <UiFileInputButton
      label="Upload Single File"
      uploadFileName="theFiles"
      onChange={onChange}
    />
  );
};

function MyApp({ Component, pageProps }) {

  return <section className="container">
    <IndexPage/>
  </section>
}

export default MyApp
