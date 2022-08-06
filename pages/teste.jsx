import { useRef } from "react"
import { Button } from "reactstrap"
const axios = require('axios').default;

export const UiFileInputButton = (props) => {
  const formRef = useRef(null);


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
        accept="image/png, image/jpeg"
        multiple={false}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        type="file"
      />
    </form>
  );
};

export const IndexPage = (props) => {

  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    const response = await axios.post('/api/teste', formData, config);

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
    <IndexPage />
  </section>
}

export default MyApp
