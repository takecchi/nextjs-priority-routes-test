
export default function UserName({ params }: { params: { userName: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      UserName: {params.userName}
    </main>
  )
}
