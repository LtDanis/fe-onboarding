export default function Avatar({ image }: { image: string | undefined }) {
  const emptyAvatar =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMS44OCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOmU2MWZlYTMwLWRjMTktNDQ0Ny1iMzIzLTI3ZGNkNWE5OGY4NTwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmQ5NzQ4NzRhLWUzNmYtNGVhYy05ZWM2LTExMDBhZmE3ZGRjMjwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/8AACwgBaAFoAQERAP/EABwAAQACAwEBAQAAAAAAAAAAAAAFBgIDBAEHCP/EADoQAQACAQMABwUHAQcFAAAAAAABAgMEBREGEyEiMUFREmFxgcEUMlKRobHR4SMzQmJygvEWJENEk//aAAgBAQAAPwD9BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"
  return (
    <img
      className="form-image"
      id="base64image"
      src={image || emptyAvatar}
      alt="image"
    />
  )
}
