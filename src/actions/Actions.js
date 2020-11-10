import Axios from 'axios'

class Actions{
  getFormData () {
    return Axios.get(`http://localhost:3001/posts?_sort=id&_order=desc`);
  }
  postDataForm (data){
    return Axios.post(`http://localhost:3001/posts`, data);
  }
  deletDataForm (data){
    return Axios.delete(`http://localhost:3001/posts/${data}`);
  }
}

export default new Actions();