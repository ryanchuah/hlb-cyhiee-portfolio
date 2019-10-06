import React, { Component } from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import TitleHeader from '../components/TitleHeader'

//todo: add resize event listener to all components that use window.innerwidth
export class Mentors extends Component {
  render() {

    const { content } = this.props
    var judges = {}
    judges.northern = []
    judges.southern = []
    judges.central = []
    judges.eastCoast = []
    judges.sarawak = []
    judges.sabah = []

    content.yearJudges.judges.forEach(judgeItem => {
      switch (judgeItem.region) {
        case 'Northern':
          judges.northern.push(judgeItem)
          break
        case 'Southern':
          judges.southern.push(judgeItem)
          break
        case 'Central':
          judges.central.push(judgeItem)
          break
        case 'East Coast':
          judges.eastCoast.push(judgeItem)
          break
        case 'Sarawak':
          judges.sarawak.push(judgeItem)
          break
        case 'Sabah':
          judges.sabah.push(judgeItem)
          break
        default:
          console.log("error")
          break
      }
    })

    var leftColumnMentors = []
    var rightColumnMentors = []

    if(window.innerWidth > 768){
      for (let i = 0; i < content.yearMentors.mentors.length / 2; i++) {
        leftColumnMentors.push(content.yearMentors.mentors[i])
      }
      for (let i = content.yearMentors.mentors.length / 2; i < content.yearMentors.mentors.length; i++) {
        rightColumnMentors.push(content.yearMentors.mentors[i])
      }
    }

    return (
      <div className='px-5'>
        <TitleHeader title={content.title} wrapperClassName="pt-5 pb-0" />
        <h2 className="text-center py-3 font-weight-bold">Regional Judges</h2>
        <Row>
          <Col sm={6} className='pb-5'>
            <h4>Northern</h4>
            <ListGroup>
              {
                judges.northern.map(item => (
                  <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                    <img src={item.image.url} width='60rem' alt={item.name} />
                    <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
          <Col sm={6} className='pb-5'>
            <h4>Southern</h4>
            <ListGroup>
              {
                judges.southern.map(item => (
                  <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                    <img src={item.image.url} width='60rem' alt={item.name} />
                    <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
          <Col sm={6} className='pb-5'>
            <h4>Central</h4>
            <ListGroup>
              {
                judges.central.map(item => (
                  <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                    <img src={item.image.url} width='60rem' alt={item.name} />
                    <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
          <Col sm={6} className='pb-5'>
            <h4>East Coast</h4>
            <ListGroup>
              {
                judges.eastCoast.map(item => (
                  <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                    <img src={item.image.url} width='60rem' alt={item.name} />
                    <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
          <Col sm={6} className='pb-5'>
            <h4>Sarawak</h4>
            <ListGroup>
              {
                judges.sarawak.map(item => (
                  <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                    <img src={item.image.url} width='60rem' alt={item.name} />
                    <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
          <Col sm={6} className='pb-5'>
            <h4>Sabah</h4>
            <ListGroup>
              {
                judges.sabah.map(item => (
                  <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                    <img src={item.image.url} width='60rem' alt={item.name} />
                    <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
        </Row>

        <h2 className="text-center py-3 font-weight-bold">Mentors</h2>
        {window.innerWidth > 768 ?
          //if >768 then split list into two columns
          <Row>
            <Col sm={6} className='pb-5'>
              <ListGroup>
                {
                  leftColumnMentors.map(item => (
                    <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                      <img src={item.image.url} width='60rem' alt={item.name} />
                      <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Col>
            <Col sm={6} className='pb-5'>
              <ListGroup>
                {
                  rightColumnMentors.map(item => (
                    <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                      <img src={item.image.url} width='60rem' alt={item.name} />
                      <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Col>
          </Row>
          :
          <Row>
            <Col className='pb-5'>
              <ListGroup>
                {
                  content.yearMentors.mentors.map(item => (
                    <ListGroup.Item key={item._id} className='d-flex align-items-center'>
                      <img src={item.image.url} width='60rem' alt={item.name} />
                      <p className='m-0 px-2' style={{ fontSize: '1.3rem' }}>{item.name}</p>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Col>
          </Row>}



      </div>
    )
  }
}

export default Mentors
