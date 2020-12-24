import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { TableStyle, WrapperActions } from './style'
import Button from '../Button'
import ModalFormUpdate from '../ModalFormUpdate'

const Table = () => {
  let initialData: any[] = []
  const [data, setData] = useState(initialData)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [uid, setUid] = useState('')
  const [nickName, setNickName] = useState('')

  useEffect(() => {
    firebase
      .database()
      .ref('all_pokemons')
      .on('value', (snapshot) => {
        let allPokemons: any[] = []
        snapshot.forEach((snap) => {
          allPokemons.push({ id: snap.key, data: snap.val() })
        })
        setData(allPokemons)
      })
  }, [])

  const deleteNote = (pokemon_id: string) => {
    firebase.database().ref(`all_pokemons/${pokemon_id}`).remove()
  }

  return (
    <>
      <TableStyle>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Nickname</th>
            <th>Height</th>
            <th>Weight</th>
            <th className="col-sm-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.data.urlimg}></img>
                </td>
                <td>{item.data.name}</td>
                <td>{item.data.nickname}</td>
                <td>{item.data.height}</td>
                <td>{item.data.weight}</td>
                <td>
                  <WrapperActions>
                    <Button
                      onClick={() => {
                        setUid(item.id)
                        setNickName(item.data.nickname)
                        setIsOpen(true)
                      }}
                      backgroundColor={'#28a745'}
                      color={'#FFFFFF'}
                      borderColor={'#28a745'}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        deleteNote(item.id)
                      }}
                      backgroundColor={'#dc3545'}
                      color={'#FFFFFF'}
                      borderColor={'#dc3545'}
                    >
                      Delete
                    </Button>
                  </WrapperActions>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableStyle>
      <ModalFormUpdate
        uid={uid}
        nickname={nickName}
        modalIsOpen={modalIsOpen}
        closeModal={setIsOpen}
      ></ModalFormUpdate>
    </>
  )
}

export default Table
