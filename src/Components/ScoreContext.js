import React,{createContext,useState} from 'react'

export const ScoreContext= createContext();



export function ScoreProvider(props){
   
  let questions = [
    {
      questionText: 'JWST stands for ?',
      questionNo:1,
      correctOption:0,
      answerOptions: [
        { answerText: 'James Webb Space Telescope',isAttempted:false },
        { answerText: 'John Webb Space Telescope',isAttempted:false  },
        { answerText: 'Jim Webb Space Telescope',isAttempted:false },
        { answerText: 'None',isAttempted:false  },
      ],
    },
    {
      questionText: 'JWST was launched on ?',
      questionNo:2,
      correctOption:3,
      answerOptions: [
        { answerText: '20th December 2021',isAttempted:false  },
        { answerText: '20th November 2021',isAttempted:false },
        { answerText: '25th December 2021',isAttempted:false  },
        { answerText: '25th November 2021',isAttempted:false  },
      ],
    },
    {
      questionText: 'Where JWST is placed in space?',
      questionNo:3,
      correctOption:0,
      answerOptions: [
        { answerText: 'Lagrange 1',isAttempted:false  },
        { answerText: 'Lagrange 2',isAttempted:false },
        { answerText: 'Lagrange 3',isAttempted:false  },
        { answerText: 'Lagrange 4',isAttempted:false  },
      ],
    },
    {
      questionText: 'How many mirrors are used in JWST ?',
      questionNo:4,
      correctOption:3,
      answerOptions: [
        { answerText: '18',isAttempted:false  },
        { answerText: '16',isAttempted:false  },
        { answerText: '14',isAttempted:false  },
        { answerText: '12',isAttempted:false },
      ],
    },
    {
        questionText: 'What is the shape of mirrors ?',
        questionNo:5,
        correctOption:3,
        answerOptions: [
          { answerText: 'Square',isAttempted:false  },
          { answerText: 'Circle',isAttempted:false  },
          { answerText: 'Pentagon',isAttempted:false  },
          { answerText: 'Hexagon',isAttempted:false },
        ],
    },
    {
        questionText: 'Which sensors are used in capturing images ?',
        questionNo:6,
        correctOption:1,
        answerOptions: [
          { answerText: 'Guidance Sensor',isAttempted:false  },
          { answerText: 'Near Infrared Imager and Slitless Spectrograph',isAttempted:false },
          { answerText: 'UV sensor',isAttempted:false  },
          { answerText: 'None',isAttempted:false  },
        ],
      },
      {
        questionText: 'How many layers of sunshield are used to protect the mirrors?',
        questionNo:7,
        correctOption:2,
        answerOptions: [
          { answerText: '"3"',isAttempted:false },
          { answerText: '"4"',isAttempted:false  },
          { answerText: '"5"',isAttempted:false  },
          { answerText: '"6"',isAttempted:false  },
        ],
      },
      {
        questionText: 'What is the telescope’s primary mirror material?',
        questionNo:8,
        correctOption:0,
        answerOptions: [
          { answerText: 'Beryllium coated with Gold',isAttempted:false },
          { answerText: 'Aluminum',isAttempted:false  },
          { answerText: 'Metal',isAttempted:false  },
          { answerText: 'Iron',isAttempted:false  },
        ],
      },
      {
        questionText: 'What types of light spectrum JWST can detect?',
        questionNo:9,
        correctOption:1,
        answerOptions: [
          { answerText: 'Visible light',isAttempted:false },
          { answerText: 'IR rays',isAttempted:false  },
          { answerText: 'Microwaves',isAttempted:false  },
          { answerText: 'UV rays',isAttempted:false  },
        ],
      },
      {
        questionText: 'What is the mirror diameter of JWST?',
        questionNo:10,
        correctOption:3,
        answerOptions: [
          { answerText: '6.9m',isAttempted:false  },
          { answerText: '7.9m',isAttempted:false  },
          { answerText: '6.3m',isAttempted:false  },
          { answerText: '6.5m',isAttempted:false },
        ],
      }
  ]
      
    const [name,setName]=useState('');
    const handleName=(nameVal)=>{
        setName(nameVal);
    }



    const scoreArr=new Set();
    const [score,setscore]=useState(0);
    const handleScore=()=>{
        setscore(scoreArr.size);
    }

    return(
        <ScoreContext.Provider value={{handleScore,score,scoreArr,handleName,name,questions}} >
            {props.children}
        </ScoreContext.Provider>
    )
}