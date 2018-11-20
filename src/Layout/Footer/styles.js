export default theme => ({
  root: {
    background: theme.palette.primary.color,
    color: theme.palette.gray.color,
    display: 'flex',
    fontFamily: theme.fonts.body,
    justifyContent: 'center',
    padding: '15px 0',
    marginTop: '1.5rem',
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1250,
    width: '100%',
    '@media screen and (max-width: 1250px)': {
      margin: '0 10px',
    },
  },
  copyright: {
    '& p': {
      fontSize: '0.75rem',
      textAlign: 'center',
      margin: 0,
    },
  },
  link: {
    '& a': {
      color: theme.palette.secondary.color,
      textDecoration: 'none',
      '&:hover': {
        // color: theme.palette.secondary.color,
      },
    },
  },
});
