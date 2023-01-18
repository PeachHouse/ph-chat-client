import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().min(1, '必須入力です').email('メールアドレスの形式で入力してください'),
  password: z.string().min(1, '必須入力です').max(50),
})

export const signupSchema = z.object({
  name: z.string().min(1, '必須入力です').max(50, '50文字以内で入力してください'),
  email: z.string().min(1, '必須入力です').email('メールアドレスの形式で入力してください'),
  password: z.string().length(8, '8文字の英数字で入力してください'),
})
