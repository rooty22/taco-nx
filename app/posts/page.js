import Todo from '../components/Todo';
import styles from './page.module.css'

export const metadata = {
  title: 'Harm',
  description: 'New Next Project'
}

const PostPage = () => {

    return (
        <div className={styles.main}>
            <Todo />
        </div>
    )
}

export default PostPage;