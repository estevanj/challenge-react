import React, { useState } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { useAuth } from '../../utils/auth'
import Table from '../../components/Table'
import ModalForm from '../../components/ModalForm'
import Button from '../../components/Button'
import Router from 'next/router'
import { WrapperHome, WrapperLogout, WrapperAdd } from './style'

const HomeView = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const auth = useAuth()

  const handleLogouth = () => {
    auth.signout &&
      auth
        .signout()
        .then(() => {
          Router.push('/')
        })
        .catch((error: any) => {
          console.log('Error')
        })
  }

  return (
    <WrapperHome>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <WrapperLogout>
              <Button
                onClick={() => {
                  handleLogouth()
                }}
                backgroundColor={'#03e9f4'}
                color={'#FFFFFF'}
                borderColor={'#03e9f4'}
              >
                Logout
              </Button>
            </WrapperLogout>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={12} lg={12}>
            <WrapperAdd>
              <Button
                onClick={() => {
                  setIsOpen(true)
                }}
                backgroundColor={'none'}
                color={'#FFFFFF'}
                borderColor={'#03e9f4'}
              >
                New Pokemon
              </Button>
            </WrapperAdd>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Table />
          </Col>
        </Row>
        <ModalForm modalIsOpen={modalIsOpen} closeModal={setIsOpen}></ModalForm>
      </Container>
    </WrapperHome>
  )
}

export default HomeView
