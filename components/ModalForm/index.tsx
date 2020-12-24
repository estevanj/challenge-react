import React, { useState } from 'react'
import Modal from 'react-modal'
import { BtnClose, modalStyles } from './style'
import { InputForm } from '../InputForm'
import firebase from 'firebase'
import Button from '../../components/Button'

var Pokedex = require('pokedex-promise-v2')
var P = new Pokedex()

const ModalForm = ({ modalIsOpen, closeModal }: any) => {
  const [nameP, setNameP] = useState('')
  const [nickNameP, setNickNameP] = useState('')
  const [errorName, setErrorName] = useState(false)

  const handleSave = () => {
    P.getPokemonByName(nameP) // with Promise
      .then(function (response: any) {
        createNote(
          response.id,
          response.height,
          response.sprites.front_default,
          response.weight
        )
      })
      .catch(function (error: any) {
        setErrorName(true)
        console.log('There was an ERROR: ', error)
      })
  }

  const createNote = (
    uid: string,
    height: string,
    urlimg: string,
    weight: string
  ) => {
    firebase
      .database()
      .ref(`all_pokemons/${uid}/`)
      .set({
        height,
        name: nameP,
        nickname: nickNameP,
        urlimg,
        weight,
      })
      .then((_: any) => {
        closeModal
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
            setNameP(e.target.value)
          }}
          id="nameP"
          type="text"
          label="Nombre Pokemon"
          borderColor="#2684FF"
          required
          error={false}
          value={nameP}
        />
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
        {errorName && <p>Dont found the pokemon</p>}
        <Button
          onClick={() => {
            handleSave()
          }}
          backgroundColor={'#03e9f4'}
          color={'#FFFFFF'}
          borderColor={'#03e9f4'}
        >
          Save
        </Button>
      </div>
    </Modal>
  )
}

export default ModalForm
