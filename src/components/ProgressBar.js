import React from "react";
import { StyleSheet, css } from 'aphrodite';

const ProgressBar = (props) => {
  const { item, bgcolor, completed } = props;
   
  const container = StyleSheet.create({
  containerStyles: {
    height: 20,
    width: '500px',
    backgroundColor: "#F2F7FC",
    boxShadow: "0px 4px 8px rgba(33, 33, 33, 0.1)",
    borderRadius: 100,
    marginBottom: 15,
    "@media (max-width: 991px)": {
      width: '100%',
    }
  }
  });

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    display: 'inline-table',
    transition: 'width 1s ease-in-out',
    
  }

  const span = StyleSheet.create({
    spanStyles: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 22,
      lineHeight: '120%',
      letterSpacing: '0.0041em',
      paddingBottom:15,
      color: 'rgba(0, 0, 0, 0.38)',
      "@media (max-width: 991px)": {
        fontSize: 18,
        
      }
    }
  });
    
  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
  }

    return (
    <div>
        <span className={css(span.spanStyles)}>{`${item}`}</span>
        <div className={css(container.containerStyles)}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    </div>
    
  );
};

export default ProgressBar;