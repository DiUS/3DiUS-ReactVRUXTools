const JsonWriter = {

  write_settings(data) {
    localStorage.setItem('sky', data);
  }
}

export default JsonWriter
