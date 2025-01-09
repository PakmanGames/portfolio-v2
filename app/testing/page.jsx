import ProjectCard from "@/components/ProjectCard";

export default function TestingPage() {
    return (
        <div>
            <ProjectCard id={1} title="Project 1" image="/images/planetpal.jpg" description="This is a description of project 1" learnMore="https://devpost.com/software/planetpal-thq27l" />
        </div>
    );
}