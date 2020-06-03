import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function ContactContent() {
    return (
        <div>
            <Typography>
                <h4>
                    Please feel free to email me with any questions.
                </h4>
                <a href={`mailto:${"Randallw1996@gmail.com"}`}>Email</a>
                <h4> Randallw1996@gmail.com</h4>
            </Typography>
        </div>
    )
}