/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'
import { Form, InputField } from '@/components/functional/Form'
import { Button } from '@/components/ui/Button'
import { signInSchema, Schema } from '@/constants/schema'
import { FiMail } from 'react-icons/all'
import { RiLockPasswordLine } from 'react-icons/all'

type FormValues = {
  email: string
  password: string
}

const styles = {
  container: css`
    background-color: ${colors.primary};
    padding: 40px;
    height: 100vh;
  `,
  title: css`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 20px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 500px;
  `,
}

export const LoginPage: FC = () => {
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>Ph Chat</h2>
      <Form<FormValues, Schema>
        schema={signInSchema}
        options={{ mode: 'onBlur' }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ register, formState }) => (
          <div css={styles.form}>
            <InputField
              type='text'
              registration={register('email')}
              placeholder='Email Address'
              error={formState.errors.email}
              icon={<FiMail size={25} color='#686d75' />}
            />
            <InputField
              type='password'
              registration={register('password')}
              placeholder='Password'
              error={formState.errors.password}
              icon={<RiLockPasswordLine size={25} color='#686d75' />}
            />
            <Button
              color='primary'
              size='normal'
              disabled={!formState.isValid || !formState.isDirty}
            >
              Sign In
            </Button>
          </div>
        )}
      </Form>
    </div>
  )
}
