import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$gray800',
    border: 'none',
    borderRadius: 6,
    padding: '0.75rem',
    position: 'relative',
    cursor: 'pointer',
  },

  'button:disabled': {
    color: '#8D8D99',
    cursor: 'default',
  },

  'button span': {
    position: 'absolute',
    top: '-0.5rem',
    left: '2.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$green500',
    borderRadius: '50%',
    width: 24,
    height: 24,
    border: '2px solid black',
    color: '$white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },
})
