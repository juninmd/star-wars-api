```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the consistent, high-quality, and maintainable development of the AGENTS repository. Adherence to these principles is crucial for long-term project success.

## 1. DRY (Don't Repeat Yourself)

- All code must be reusable and avoid duplication.
- Code should be modularized into distinct components with clearly defined responsibilities.
- When a component needs to be modified, the change should ideally be propagated to all related components.
- Utilize functions, classes, and modules to achieve reusability.

## 2. KISS (Keep It Simple, Stupid)

- Code should be concise and easy to understand.
- Avoid unnecessary complexity.
- Prioritize clarity over cleverness.
- Refactor code frequently to improve readability and maintainability.
- Basic structure is always favored over advanced features.

## 3. SOLID Principles

- **Single Responsibility Principle:** Each class/module should have one primary responsibility.
- **Open/Closed Principle:** Systems should be extensible without modification.  New functionality should be added through APIs, not by modifying existing code.
- **Liskov Substitution Principle:** Subclasses should be substitutable for their base classes without affecting the correctness of the program.
- **Interface Segregation Principle:** Clients should receive only the interface elements they need, and no unnecessary elements.
- **Dependency Inversion Principle:** Client code should not depend on implementation details; they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

- Avoid adding features or code that is not currently required.
- Focus on implementing the essential functionality first.
- Refactor code to remove unnecessary functionality.

## 5. Code Style & Conventions

- **Naming Conventions:** Follow established naming conventions (e.g., camelCase, snake_case).
- **Indentation:** Use consistent indentation (2 spaces).
- **Line Length:** Keep lines under 120 characters.
- **Commenting:**  Add concise and relevant comments to explain complex logic.
- **Error Handling:** Use standard error handling techniques (e.g., try/except blocks).
- **Code Formatting:** Use a code formatter (e.g., Prettier) to ensure consistent formatting across the codebase.

## 6. Testing Strategy

- **Unit Tests:** All new code must be thoroughly tested with unit tests.
- **Coverage Targets:** Aim for at least 80% test coverage.
- **Test Driven Development:** Prioritize writing tests *before* implementation.
- **Mocking:**  Use mocks and stubs ONLY for testing.  Do not use real implementations.
- **Test Data:**  Ensure test data is clean, realistic, and easily reproducible.
- **Test Structure:** Organize tests logically using a clear naming convention.

## 7. File Size Limit

- Each file must not exceed 180 lines of code.

## 8. Development Workflow

- All code must be reviewed by at least one other developer.
- Implement a pull request process for code review and merging.
- Strive for continuous integration and automated testing.

## 9. Documentation

- Provide clear and concise documentation for all code, including API documentation, design decisions, and usage examples.
- Document dependencies and assumptions.

## 10.  Maintainability

-  Code should be easily modified and updated.
-  Use version control (Git) effectively.
-  Create meaningful commit messages.

## 11. Specifics (Examples - Adapt as needed):

-  If a class needs a dependency, document it clearly.
-  For complex algorithms, outline the steps.
-  Consider edge cases during development and testing.

These guidelines are a starting point. Refinement and adjustment will be necessary as the project evolves.  Continuous improvement is vital for maintaining the quality of the AGENTS repository.
```