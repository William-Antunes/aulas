import { Input } from '../Input';
import { Cycle } from '../Cycle';
import { Button } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
    return (
        <>
                <form action='' className='form'>
                  <div className='formRow'>
                    <Input
                      id='input'
                      type='text'
                      labelText='Task'
                      placeholder='Digite algo'
                    />
                  </div>
        
                  <div className='formRow'>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
        
                  <div className='formRow'>
                    <Cycle />
                  </div>
        
                  <div className='formRow'>
                    <Button icon={<PlayCircleIcon />} />
                  </div>
                </form>
                </>
    )
}