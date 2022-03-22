export default function PostingContainer() {
  const [getData, setData] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contents, setContents] = useState('')
  const [contentsError, setContentsError] = useState('')

  const [sendContents] = useMutation(SEND_CONTENTS)

  const router = useRouter() // router세팅

  const onChangeName = (event) => {
    setName(event.target.value)
    if (name !== '') {
      setNameError('')
    }
  }

  const onChangePw = (event) => {
    setPassword(event.target.value)
    if (password !== '') {
      setPasswordError('')
    }
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if (title !== '') {
      setTitleError('')
    }
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
    if (contents !== '') {
      setContentsError('')
    }
  }

  const submitContents = async () => {
    if (name === '') {
      setNameError('name is empty')
    }

    if (password === '') {
      setPasswordError('password is empty')
    }

    if (title === '') {
      setTitleError('Title is empty')
    }

    if (contents === '') {
      setContentsError('contents is empty')
    }
    const response = await sendContents({
      variables: {
        createBoardInput: {
          writer: name,
          password: password,
          title: title,
          contents: contents,
        },
      }
    })
  
    setData(response.data)
    router.push(`../boards/post_list/${response.data.createBoard._id}`)
  }

  return (
    <PostingUI
      onChangeName = {onChangeName}
      nameError = {nameError}
      onChangePw = {onChangePw}
      passwordError = {passwordError}
      onChangeTitle = {onChangeTitle}
      contentsError = {contentsError}
      submitContents = {submitContents}
    />

    
  )
}
