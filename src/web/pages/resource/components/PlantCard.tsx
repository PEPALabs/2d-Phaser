import { createStyles, Card, Group, Switch, Button, Text, rem } from '@mantine/core';
import React from 'react';
import usePlantStore from '../../../../data/plantStore'
import {PlantType} from '../../../../data/plants'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  fontSizes: {
    xs: '0.6rem',
    sm: '0.75rem',
    md: '0.9rem',
    lg: '1rem',
    xl: '1.2rem',
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

  },

  switch: {
    '& *': {
      cursor: 'pointer',
    },
  },

  title: {
    lineHeight: 1,
  },
}));

interface PlantCardProps {
  item: any;
  updatePlant: any;
  removePlant: any;
}

export function PlantCard({ item, updatePlant, removePlant }: PlantCardProps) {
  const { classes } = useStyles();

  const onClickPlant = () => {
    console.log("Planting");
    var tmpPlant:PlantType = {...item};
    tmpPlant.state = "PLANTING";
    updatePlant(tmpPlant,item.id);
  }

  const onClickHarvest = () => {
    console.log("Harvesting");
    removePlant(item, item.id);
  }

//   const items = data.map((item) => (
//     <Card withBorder radius="md" p="xl" className={classes.card}>
//         <Group position="apart" className={classes.item} noWrap spacing="xl">
//         <div>
//             <Text>{item.title}</Text>
//             <Text size="xs" color="dimmed">
//             {item.description}
//             </Text>
//         </div>

//         <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
//         </Group>
//     </Card>
//   ));

  return (
    // <Card withBorder radius="md" p="xl" className={classes.card}>
    <>
      {/* {items} */}
      <Card withBorder radius="md" p="xl" className={classes.card}>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
        <div>
            <Text>{item.name}</Text>
            <Text size="xs" color="dimmed">
            {item.description}
            </Text>
        </div>

        {item.state === "EMPTY"?
            <Button onClick={onClickPlant} color="green" radius="sm"  w={100}>
              <Text fz="sm">Plant</Text>
            </Button>
            :
            item.state === "PLANTING"?
              <Button disabled={true} color="grey" radius="sm" w={100}>
                <Text fz="sm">Planting</Text>
              </Button>
              :
              <Button onClick={onClickHarvest} color="yellow" radius="sm" w={100}>
                <Text fz="sm">Harvest</Text>
              </Button>

        }
            
        </Group>
    </Card>
    </>
    // </Card>
  );
}