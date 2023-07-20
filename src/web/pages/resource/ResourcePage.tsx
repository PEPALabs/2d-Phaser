import React from 'react'
import {
  Text,
  TextInput,
  PasswordInput,
  Stack,
  Group,
  Anchor,
  Button,
  Title,
  Paper,
  Checkbox,
  Container,
  Box,
  Space,
  Center,
  createStyles,
  rem,
  Avatar,
  SimpleGrid,
  ScrollArea

} from '@mantine/core'

import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import {PlantCard} from './components/PlantCard'
import usePlantStore from '../../../data/plantStore'

const resources = [
  {
    name: 'PEPA',
    count: 0
  },
  {
    name: 'Gold',
    count: 0
  },
  {
    name: 'Level',
    count: 1
  },
  {
    name: 'Worker',
    count: 0
  },
  {
    name: 'Wood',
    count: 0
  },
  {
    name: 'Stone',
    count: 0
  },
  {
    name: 'Iron',
    count: 0
  },
  {
    name: 'Water',
    count: 0
  }
]

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      margin: 'auto',
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
      width: '100%',
      gap: rem(4),

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

  }
});

const userInfoStyle = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const ResourcePage = () => {
  
  const { classes } = useStyles();
  const userStyle = userInfoStyle();
  const { plants, addPlant,removePlant,updatePlant} = usePlantStore();


  const title = 'Beginner';
  const name = 'Felix';
  const email = 'xyz@pepamarket.com'

  const plantData = Object.entries(plants).map((item)=>{
    if(item[1]){
      return item[1]
    }
  }).filter((item)=>item!==undefined)
  console.log(plantData,plants)



  return (
    <Container size={800}>
      <Center className="h-full">
        
        <Space mih={700} />
        <Paper p="xl" radius="md" w={800} className={classes.wrapper}>
          
            <Box component="form" w={350} m="md">
              <Group noWrap>
                <Avatar src={null} size={94} radius="md">
                  <span className="avatar bg-green-lt">Fe</span>
                </Avatar>
                <div>
                  <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    {title}
                  </Text>

                  <Text fz="lg" fw={500} className={userStyle.classes.name}>
                    {name}
                  </Text>

                  <Group noWrap spacing={10} mt={3}>
                    <IconAt stroke={1.5} size="1rem" className={userStyle.classes.icon} />
                    <Text fz="xs" c="dimmed">
                      {email}
                    </Text>
                  </Group>
                </div>
              </Group>
                <Stack px="xs">
                  <Title color="blue" order={3}>Resources</Title>
                  <SimpleGrid cols={2}>
                    {resources.map(resource => (
                      <Button
                        key={resource.name}
                        variant="default"
                        rightIcon={<Text color="blue">{resource.count}</Text>}>
                        {resource.name}
                      </Button>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Box>

          <Box
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              textAlign: 'center',
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: 'pointer',
              flex: 1,

              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
              },
            })}
          >
            
    
            <Title order={3} color="blue">Plants</Title>
            <ScrollArea w="full" h={300}>
              {plantData.map((item)=>(
                <PlantCard item={item} removePlant={removePlant} updatePlant={updatePlant} />
              ))}
            </ScrollArea>

          </Box>
        </Paper>
      
      </Center>
    </Container>
  )
}

export default ResourcePage