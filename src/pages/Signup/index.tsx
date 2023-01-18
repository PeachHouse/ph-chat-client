/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/constants/colors'
import { Form, InputField } from '@/components/functional/Form'
import { Button } from '@/components/ui/Button'
import { signupSchema } from '@/constants/schema'
import { FiMail, RiLockPasswordLine, MdOutlineDriveFileRenameOutline } from 'react-icons/all'

type FormValues = {

    name: string
    email: string
    password: string
}

type SignupSchema = typeof signupSchema

const styles = {
    container: css`
    padding: 40px;
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

export const SignupPage: FC = () => {
    return (
        <div css={styles.container}>
            <h2 css={styles.title}>Ph Chat</h2>
            <Form<FormValues, SignupSchema>
                schema={signupSchema}
                options={{ mode: 'onChange' }}
                onSubmit={async (values) => {
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {({ register, formState }) => (
                    <div css={styles.form}>
                        <InputField
                            type='text'
                            registration={register('name')}
                            placeholder='Name'
                            error={formState.errors.name}
                            icon={<MdOutlineDriveFileRenameOutline size={25} color={colors.gray}/>}
                            testId='name'
                        />
                        <InputField
                            type='text'
                            registration={register('email')}
                            placeholder='Email Address'
                            error={formState.errors.email}
                            icon={<FiMail size={25} color={colors.gray} />}
                            testId='email'
                        />
                        <InputField
                            type='password'
                            registration={register('password')}
                            placeholder='Password'
                            error={formState.errors.password}
                            icon={<RiLockPasswordLine size={25} color={colors.gray} />}
                            testId='password'
                        />
                        <Button color='primary' disabled={!formState.isValid || !formState.isDirty}>
                            Sign Up
                        </Button>
                    </div>
                )}
            </Form>
        </div>
    )
}
