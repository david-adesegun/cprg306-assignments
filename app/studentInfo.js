import Link from "next/link";

const StudentInfo = () => {
    return (
        <div>
            <h2>David Adesegun</h2>
            <p>CPRG 306 F</p>
            <Link href="https://github.com/david-adesegun/cprg306-assignments" className="text-blue-500 hover:text-blue-800">GitHub Repository</Link>
        </div>
    );
};

export default StudentInfo;
