import NextAuth from "@node_modules/next-auth";
import EmailProvider from "@next-auth/providers/email";


const handler = NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        })
    ],
    callbacks: {
        async signIn({ user }) {
            const allowedEmail = process.env.ADMIN_EMAIL
            if(user?.email === allowedEmail) return true
            return false
        },
        async session({ session }) {
            return session
        },
    },
    pages: {
        signIn: "/admin/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}