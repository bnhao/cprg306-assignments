import Link from "next/link"

export default function StudentInfo() {
    return (
        <div>
            <h2><b>Name:</b> Nguyen Hao Bui</h2>
            <h3 className="font-bold">Github Link:</h3>
            <Link href="https://github.com/bnhao/cprg306-assignments" className="underline text-cyan-600 hover:text-cyan-300">https://github.com/bnhao/cprg306-assignments</Link>
        </div>

    )
}