import React from 'react';

export default function Alert(props) {
  if (!props.alert) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: props.alert.type === 'success' ? '#198754' : '#dc3545',
        color: 'white',
        padding: '12px 18px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontWeight: '500',
      }}
    >
      {props.alert.msg}
    </div>
  );
}
