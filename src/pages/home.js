import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetVariable } from '../actions/fileAction';
import { Container, Text, Title, Button, Group } from '@mantine/core';
import { Accordion } from '@mantine/core';
import { rulesFul } from '../rules';
import '../css/home.css'


const Home = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    sessionStorage.setItem("tabs", "Presets");
    dispatch(resetVariable());
  };

  return (
    <div className='homePage'>


      <div className="homeHeader">
        <Container size={700} className="homeText">
          <Title className="name">
            The application{' '}<br />
            <Text component="span" color="violet">
              MAP
            </Text>{' '}<br />
            is a tool designed<br /> to check student's <br />work
          </Title>

          <Text className="description" color="dimmed">
            "Map" scans the text of the paper and highlights
            problematic areas. This way, students receive
            immediate feedback and have the opportunity
            to enhance their writing skills.
            The application provides statistics of work.
            "Map" analyzes parameters such as word frequency,
            use of academic vocabulary,
            and text structure. This information allows students
            to better understand their weaknesses and
            focus on improving.
          </Text>

          <Group>
            <Link
              to="/Presets"
            ><Button
              size="xl"
              color="violet"
              onClick={handleReset}>
                Get started
              </Button></Link>
          </Group>

        </Container>

        <div className="papers">
          <img src={require('../images/paper.webp')} className="paper1" alt="paper" />
          <img src={require('../images/paper.webp')} className="paper2" alt="paper" />
        </div>

      </div>
      <Title style={{ paddingTop: '200px', paddingBottom: '30px' }}>Rules</Title>
      <div className='list'>
        <Accordion style={{ width: 'calc(180px + 495 * (100vw / 1280))' }} variant="default">
          {rulesFul.map((rule, index) => (
            <Accordion.Item
              value={"id" + index}
            >
              <Accordion.Control>
                <Text
                  value={"id" + index}
                >{rule.title}</Text>
              </Accordion.Control>

              <Accordion.Panel >
                <Text color="dimmed">{rule.description} </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

      </div>

    </div>
  );
};

export default Home;
