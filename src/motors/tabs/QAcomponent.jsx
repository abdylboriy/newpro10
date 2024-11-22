import React, { useRef } from 'react';
import { FAQ, Tabsinfo7 } from './Tabs'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';



const QAcomponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_otxrew9', 'template_ooumkoc', form.current, {
        publicKey: 'p8U_uxaguH9kvrFeo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <FAQ>
        <div style={{display: 'flex', flex: "2", flexDirection: "column"}}>
         <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1,width: '100ch'  } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        
        </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        
        </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        
        </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        
        </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        
        </Box>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue="Question Lorem ipsum dolor sit amet ?"
          variant="standard"
        />
        
        </Box>
        
        </div>
        <Tabsinfo7>
      <h1>Send a question</h1>
      <form ref={form} onSubmit={sendEmail}>
      <input id="input3" type="text" name="user_name" placeholder='Your name'/>
      <input id="input1" type="email" name="user_email" placeholder='Your email'/>
      <textarea placeholder="Your question"/>
      <button type="submit" value="Send" >Send question</button>
    </form>
</Tabsinfo7>
        <div></div>
    </FAQ>
  )
}

export default QAcomponent