import  { Component } from "react";

class CloudinaryUploadWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImageUrl: "",
      thumbnail: ""
    };
  }

  componentDidMount() 
  {
    const cloudName = "dmmiirdfo"; 
    const uploadPreset = "ixbhf3qy"; 

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.setState({ uploadedImageUrl: result.info.secure_url });
          this.setState({ thumbnail: result.info.thumbnail_url})
          this.props.onImageUpload(result.info.secure_url, result.info.thumbnail_url);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button bg-transparent text-[9px] sm:text-sm md:text-lg md:h-auto md:w-auto rounded-3xl  "  >
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;