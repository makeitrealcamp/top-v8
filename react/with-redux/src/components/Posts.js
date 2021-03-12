import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../store/postsReducer'

function Posts() {
  const dispatch = useDispatch()
  const { loading, posts, error } = useSelector(({ postReducer }) => ({
    loading: postReducer.loading,
    posts: postReducer.posts,
    error: postReducer.error,
  }))

  useEffect(() => {
    dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading) return <p>loading...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <section>
      {!!posts && posts.length > 0 && posts.map(({ id, title, body }) => (
        <article key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </article>
      ))}
    </section>
  )
}

export default Posts
