import React, { Fragment, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Actions from '../../../actions/Actions';
import useRefresh from '../../../actions/ActionsRefresh';
const defaultDataForm = {
  id: 1,
  nama: '',
  noHp: ''
}
export default function Formd() {
  const [, setReferesh] = useRefresh(0)
  const [data, setDataForm] = useState(defaultDataForm)


  const handelChange = (e) => {
    console.log('1', e.target.name)
    data.id = new Date().getTime()
    data[e.target.name] = e.target.value
    setDataForm({ ...data })
    console.log('change', data)
  }

  const handelOnClick = () => {
    Actions.postDataForm(data).then(res => {
      alert('Data Berhasil Di Simpan ', res)
      setReferesh()
    }, (err) => {
      alert('Data Gagal Di Simpan', err)
    })
    console.log('hay aku click',)
  }

  return (
    <Fragment>
      <Form>
        <Form.Item label="Nama" required tooltip="I Made Darma Yasa (Harus di isi!)">
          <Input name="nama" placeholder="Masukkan Nama " onChange={handelChange} />
        </Form.Item>
        <Form.Item label="Alamat" tooltip="Optional" >
          <Input name="noHp" placeholder="Masukkan Alamat" onChange={handelChange} />
        </Form.Item>
        <Form.Item>
          <Button onClick={handelOnClick} type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}