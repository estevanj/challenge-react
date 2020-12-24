import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { BtnClose, modalStyles } from './style'
import { InputForm } from '../InputForm'
import firebase from 'firebase'
import Button from '../Button'

const ModalUpdate = ({ modalIsOpen, closeModal, uid, nickname }: any) => {
  const [nickNameP, setNickNameP] = useState('')

  useEffect(() => {
    setNickNameP(nickname)
  }, [uid])

  const handleUpdate = () => {
    firebase
      .database()
      .ref(`all_pokemons/${uid}`)
      .update({
        nickname: nickNameP,
      })
      .then((_) => {
        closeModal(false)
      })
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={modalStyles}
    >
      <BtnClose onClick={() => closeModal(false)}>x</BtnClose>
      <div>
        <InputForm
          onChange={(e: any) => {
            setNickNameP(e.target.value)
          }}
          id="nameP"
          type="text"
          label="Nickname Pokemon"
          borderColor="#2684FF"
          required
          error={false}
          value={nickNameP}
        />

        <Button
          onClick={() => {
            handleUpdate()
          }}
          backgroundColor={'#03e9f4'}
          color={'#FFFFFF'}
          borderColor={'#03e9f4'}
        >
          Update
        </Button>
      </div>
    </Modal>
  )
}

export default ModalUpdate
