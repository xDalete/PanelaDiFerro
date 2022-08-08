import { useRef } from "react"
import { Button } from "reactstrap"
const axios = require('axios').default;

export const UiFileInputButton = (props) => {
  const formRef = useRef(null);


  const onChangeHandler = (event) => {
    console.log(event.target.name)
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();
    formData.append(event.target.name, event.target.files[0], "");
    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
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
    console.log(formData)
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
      uploadFileName="thumb"
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
