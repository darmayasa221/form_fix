import React, { useState, useEffect } from 'react'
import { Card, Button } from 'antd';
import Actions from '../../actions/Actions';
import useRefresh from '../../actions/ActionsRefresh';

export default function Cards() {
  const [formData, setFormData] = useState([])
  const [refreshKey, setRefres] = useRefresh(0)


  useEffect(() => {
    Actions.getFormData().then((res) => setFormData(res.data))
  }, [refreshKey]);

  const deletData = (e) => {
    console.log('hay Aku delet', e)
    Actions.deletDataForm(e).then(() => {
      setRefres()
    })
  }

  return (
    <div className="site-card-border-less-wrapper">
      {formData.map((data) => (
        <Card key={data.id} title="Data Diri" bordered={false} style={{ width: 300, textAlign: "center", margin: 10, float: "left" }}>
          <p> No ID : {data.id}</p>
          <p> Nama  : {data.nama}</p>
          <p> Alamat: {data.noHp}</p>
          <Button onClick={() => deletData(data.id)}>Remove</Button>
        </Card>
      ))}
    </div>
  )
}
