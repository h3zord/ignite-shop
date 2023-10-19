import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgb(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  background: '$gray800',
  padding: '3rem',
  width: '24rem',
  height: '100vh',
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 30,
  right: 30,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#8D8D99',

  '&:hover': {
    color: '$gray300',
  },
})

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  color: '$gray100',
  fontWeight: 'bold',
  lineHeight: '1.6',
  marginTop: '1.5rem',
  fontFamily: 'Roboto',
})

export const ShirtListContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: '2rem',
  width: '24rem',
  gap: '1.5rem',
  height: '20.8rem',
  maxHeight: '20.8rem',
  overflowY: 'auto',
  paddingRight: '1rem',

  '& > div': {
    display: 'grid',
    gap: '1.25rem',
    gridTemplateColumns: '102px auto',
  },
})

export const ImageContainer = styled('div', {
  width: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProductDetails = styled('div', {
  p: {
    color: '$gray300',
    fontWeight: 'bold',
    lineHeight: '1.6',
    fontSize: '$md',
  },

  span: {
    display: 'block',
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: '1.6',
    fontSize: '$md',
  },

  button: {
    background: 'transparent',
    color: '$green500',
    border: 'none',
    fontWeight: 'bold',
    lineHeight: '1.6',
    marginTop: '1rem',
    cursor: 'pointer',
  },

  'button:hover': {
    color: '$green300',
  },
})

export const QuantityAndPrice = styled('div', {
  marginTop: '10rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  alignItems: 'center',

  p: {
    color: '$gray100',
  },

  span: {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$md',
  },

  h5: {
    justifySelf: 'flex-end',
    color: '$gray300',
    fontSize: '$md',
  },

  h3: {
    justifySelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: '$xl',
  },
})

export const FinalizePurchase = styled('button', {
  background: '$green500',
  marginTop: '2.5rem',
  width: '100%',
  padding: '20px 32px',
  borderRadius: 8,
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$md',
  lineHeight: '1.6',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    background: '$green300',
  },
})
